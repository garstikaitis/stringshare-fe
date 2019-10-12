export default function (count = 10) {
  return {
    data() {
      return {
        displayPriority: 0,
      };
    },
    mounted() {
      this.runDisplayPriority();
    },
    methods: {
      runDisplayPriority() {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority = this.displayPriority + 1;
            if (this.displayPriority < count) step();
          });
        };
        step();
      },
      deferDisplayOrder(priority) {
        const cap = priority > count ? count : priority;
        return this.displayPriority >= cap;
      },
    },
  };
}
