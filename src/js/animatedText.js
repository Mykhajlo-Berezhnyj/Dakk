export function animatedText(text) {
  return {
    letters: text.split(""),

    colors2: ["red", "blue", "purple", "green", "orangered", "navy", "magenta"],
    colors: ["red", "orangered", "gold", "green", "blue", "navy", "purple"],

    current: 0,
    glow: false,

    init() {
      setInterval(() => {
        this.current = (this.current + 1) % this.colors.length;
      }, 300);
    },

    getColor(index, glow) {
      if (glow) return this.colors[(index - this.current) % this.colors.length];
      return this.colors[
        (index - this.current + this.colors.length) % this.colors.length
      ];
    },
  };
}
