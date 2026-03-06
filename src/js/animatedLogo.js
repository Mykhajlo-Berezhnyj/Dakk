export function animatedLogo() {
  return {
    letters: ["Д", "А", "К", "К"],

    colors: [
      "magenta",
      "green",
      "blue",
      "purple",
      "lime",
      "aquamarine",
      "red",
      "springgreen",
      "navy",
      "orangered",
      "limegreen",
      "cyan",
      "chocolate",
    ],

    current: 0,
    glow: false,

    init() {
      setInterval(() => {
        this.current = (this.current + 1) % this.colors.length;
      }, 500);
    },

    getColor(index) {
      return this.colors[(index + this.current) % this.colors.length];
    },
    reversColor(index) {
      return this.colors[
        (index - this.current + this.colors.length) % this.colors.length
      ];
    },
  };
}
