import React from "react";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <>
    <style>{`.icon-btns {
  display: grid;
  grid-gap: 5em;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  padding: 3em 0;
  overflow: visible;
}

.icon-btn {
  background-color: transparent;
  outline: none;
  position: relative;
  width: 4.5em;
  height: 4.5em;
  perspective: 24em;
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: transparent;
}

.icon-btn__back,
.icon-btn__front,
.icon-btn__label {
  transition: opacity 0.3s cubic-bezier(0.83, 0, 0.17, 1),
    transform 0.3s cubic-bezier(0.83, 0, 0.17, 1);
}

.icon-btn__back,
.icon-btn__front {
  border-radius: 1.25em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.icon-btn__back {
  box-shadow: 0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15);
  display: block;
  transform: rotate(15deg);
  transform-origin: 100% 100%;
}

.icon-btn__front {
  background-color: hsla(0, 0%, 100%, 0.15);
  box-shadow: 0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset;
  backdrop-filter: blur(0.75em);
  -webkit-backdrop-filter: blur(0.75em);
  display: flex;
  transform-origin: 80% 50%;
}

.icon-btn__icon {
  margin: auto;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn__label {
  font-size: 1em;
  white-space: nowrap;
  text-align: center;
  line-height: 2;
  opacity: 0;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  transform: translateY(0);
}

.icon-btn:focus-visible .icon-btn__back,
.icon-btn:hover .icon-btn__back {
  transform: rotate(25deg) translate3d(-0.5em, -0.5em, 0.5em);
}

.icon-btn:focus-visible .icon-btn__front,
.icon-btn:hover .icon-btn__front {
  transform: translateZ(2em);
}

.icon-btn:focus-visible .icon-btn__label,
.icon-btn:hover .icon-btn__label {
  opacity: 1;
  transform: translateY(20%);
}

@media (min-width: 768px) {
  .icon-btns {
    grid-template-columns: repeat(3, 1fr);
  }
}`}</style>
      <div className={`icon-btns ${className || ""}`}>
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`icon-btn ${item.customClass || ""}`}
            aria-label={item.label}
          >
            <span
              className="icon-btn__back"
              style={getBackgroundStyle(item.color)}
            ></span>
            <span className="icon-btn__front">
              <span className="icon-btn__icon" aria-hidden="true">
                {item.icon}
              </span>
            </span>
            <span className="icon-btn__label">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default GlassIcons;
