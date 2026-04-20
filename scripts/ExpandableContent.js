const rootSelector = "[data-js-expandable-content]";

class ExpandableContent {
  selectors = {
    button: "[data-js-expandable-content-button]",
    buttonText: "[data-js-icon]",
  };

  stateClasses = {
    isExpanded: "is-expanded",
    isClose: "is-close",
  };

  constructor(rootElement) {
    this.rootElement = rootElement;

    this.expandedButtonElement = this.rootElement.querySelector(
      this.selectors.button,
    );
    this.textElement = this.expandedButtonElement?.querySelector(
      this.selectors.buttonText,
    );

    this.initialText = this.textElement.textContent.trim();
    this.expandedText = "Close Blog Info";

    this.bindEvents();
  }

  onExpandedButtonClick = () => {
    this.rootElement.classList.toggle(this.stateClasses.isExpanded);
    this.expandedButtonElement.classList.toggle(this.stateClasses.isClose);

    const isExpanded = this.rootElement.classList.contains(
      this.stateClasses.isExpanded,
    );

    this.textElement.textContent = isExpanded
      ? this.expandedText
      : this.initialText;
  };

  bindEvents() {
    this.expandedButtonElement.addEventListener(
      "click",
      this.onExpandedButtonClick,
    );
  }
}

class ExpandableContentCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new ExpandableContent(element);
    });
  }
}
export default ExpandableContentCollection;
