class DevJobAvatar extends HTMLElement {
  constructor() {
    super(); // Llama al constructor de HTMLElement

    this.attachShadow({mode: 'open'});
  }

  createUrlAvatar(service, userName) {
    return `https://unavatar.io/${service}/${userName}`;
  }

  render() {
    const service = this.getAttribute('service') ?? ''
    const userName = this .getAttribute('username') ?? ''
    const size = this.getAttribute('size') ?? '';

    const url = this.createUrlAvatar(service, userName);


    this.shadowRoot.innerHTML = `
      <style>
        .avatar {
          border-radius: 50%;
          width: ${size}px;
          height: ${size}px;
        }
      </style>
      <img 
        src="${url}" 
        alt="User Avatar"
        class="avatar"
      >
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("dev-jobs-avatar", DevJobAvatar);
