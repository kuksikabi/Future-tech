class ExpandableContent {
  selectors = {
    root: "[data-js-expandable-content]",
    expandedButton: "[data-js-expandable-content-button]",
    buttonText: "[data-js-icon]",
  };
  stateClasses = {
    isExpanded: "is-expanded",
    isClose: "is-close",
  };
  constructor(rootElement) {
    this.rootElement = document.querySelector(this.selectors.root);
    this.expandedButtonElement = this.rootElement.querySelector(
      this.selectors.expandedButton,
    );
    this.textElement = this.expandedButtonElement.querySelector(
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

export default ExpandableContent;
