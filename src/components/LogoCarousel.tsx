import { useState, useRef, useEffect, useCallback } from 'react';
import { MEDIA_BASE } from '../lib/config';
import { logos } from '../data/logos';
import Container from './ui/Container';

const ITEM_W = 200;   // px per logo slot
const STEP_MS = 3000; // pause between steps
const ANIM_MS = 600;  // transition duration

const tripled = [...logos, ...logos, ...logos];
const ORIGIN = logos.length;

export default function LogoCarousel() {
  // Float index: lets drag track cursor continuously; we snap to integer on release
  const [index, setIndex] = useState<number>(ORIGIN);
  const [animated, setAnimated] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const measure = () => setContainerWidth(containerRef.current?.clientWidth ?? 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const isDragging = useRef(false);

  // Auto-step: skip while user is dragging
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging.current) setIndex((p) => p + 1);
    }, STEP_MS);
    return () => clearInterval(timer);
  }, []);

  // Seamless loop: after animation settles, silently jump to middle copy
  useEffect(() => {
    if (index >= logos.length * 2) {
      const t = setTimeout(() => {
        setAnimated(false);
        setIndex((p) => p - logos.length);
      }, ANIM_MS + 50);
      return () => clearTimeout(t);
    }
    if (index < 0) {
      const t = setTimeout(() => {
        setAnimated(false);
        setIndex((p) => p + logos.length);
      }, ANIM_MS + 50);
      return () => clearTimeout(t);
    }
  }, [index]);

  // Re-enable animation one frame after a silent loop jump
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  // Drag: track raw pixel delta so the carousel follows the cursor smoothly.
  // On release, Math.round(p) snaps to the nearest slot — with animation enabled,
  // CSS transitions the settle automatically.
  const dragStartX = useRef(0);
  const dragBaseIndex = useRef<number>(ORIGIN);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.pageX;
    dragBaseIndex.current = Math.round(index);
  }, [index]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    const rawDelta = (dragStartX.current - e.pageX) / ITEM_W;
    setAnimated(false);
    setIndex(dragBaseIndex.current + rawDelta);
  }, []);

  const onMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    // Re-enable transition, then snap to nearest integer slot — CSS animates the settle
    setAnimated(true);
    setIndex((p) => Math.round(p));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  const centeredIdx = Math.round(index);
  const activeIndex = ((centeredIdx % logos.length) + logos.length) % logos.length;
  const translateX = containerWidth / 2 - index * ITEM_W - ITEM_W / 2;

  return (
    <section className="py-8 bg-gray-50 border-t border-gray-100">
      <Container className="text-center">
        <p className="text-gray-500 text-sm font-medium mb-6 tracking-wide">
          Trusted by leading global organizations
        </p>

        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown}
        >
          {/* py-3 gives scaled logos vertical breathing room without clipping */}
          <div
            className="flex items-center py-3"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: animated ? `transform ${ANIM_MS}ms ease-in-out` : 'none',
            }}
          >
            {tripled.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0 px-4"
                style={{ width: ITEM_W }}
              >
                <img
                  src={`${MEDIA_BASE}${logo.image}`}
                  alt={logo.name}
                  className={`${logo.cls} object-contain transition-all duration-500 ${
                    i === centeredIdx ? 'grayscale-0 scale-110' : 'grayscale opacity-50'
                  }`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dense dot indicator */}
        <div className="flex justify-center items-center gap-1 mt-5">
          {logos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAnimated(true);
                const diff = i - activeIndex;
                const shortcut = diff > logos.length / 2 ? diff - logos.length
                  : diff < -logos.length / 2 ? diff + logos.length : diff;
                setIndex((p) => Math.round(p) + shortcut);
              }}
              className={`rounded-full transition-all duration-200 ${
                i === activeIndex ? 'w-4 h-2 bg-gray-700' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to ${logos[i].name}`}
            />
          ))}
        </div>

        <p className="text-gray-400 text-xs mt-3 italic">
          And many more leading companies worldwide
        </p>
      </Container>
    </section>
  );
}
