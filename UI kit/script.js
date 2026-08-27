

function createButton({ text, variant = "primary", onClick }) {
  const button = document.createElement("button");

  button.textContent = text;
  button.className = `ui-button ${variant}`;

  button.addEventListener("click", onClick);

  return button;
}


function createCard({ title, description }) {
  const card = document.createElement("div");

  card.className = "ui-card";

  card.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
  `;

  return card;
}


function createModal({ title, content }) {

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  overlay.innerHTML = `
    <div class="modal">
      <button class="close-modal">&times;</button>
      <h2>${title}</h2>
      <p>${content}</p>
    </div>
  `;

  const closeButton = overlay.querySelector(".close-modal");

  function close() {
    overlay.remove();
  }

  closeButton.addEventListener("click", close);

  overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
      close();
    }
  });

  return {
    element: overlay,
    open() {
      document
        .getElementById("modal-container")
        .appendChild(overlay);
    },
    close
  };
}


function createToast({ message, type = "info", duration = 3000 }) {

  const toast = document.createElement("div");

  toast.className = `toast ${type}-toast`;
  toast.textContent = message;

  const container = document.getElementById("toast-container");

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, duration);
}

const buttonsContainer = document.getElementById("buttons");

const primaryButton = createButton({
  text: "Primary Button",
  variant: "primary",
  onClick: () => {
    createToast({
      message: "Primary button clicked!",
      type: "success"
    });
  }
});

const secondaryButton = createButton({
  text: "Secondary Button",
  variant: "secondary",
  onClick: () => {
    createToast({
      message: "Secondary button clicked!",
      type: "info"
    });
  }
});

const dangerButton = createButton({
  text: "Delete",
  variant: "danger",
  onClick: () => {
    createToast({
      message: "Delete action clicked!",
      type: "error"
    });
  }
});

buttonsContainer.append(
  primaryButton,
  secondaryButton,
  dangerButton
);


const cardsContainer = document.getElementById("cards");

const card1 = createCard({
  title: "JavaScript",
  description: "JavaScript makes websites interactive and dynamic."
});

const card2 = createCard({
  title: "HTML",
  description: "HTML provides the structure of a web page."
});

const card3 = createCard({
  title: "CSS",
  description: "CSS is used to style and design web pages."
});

cardsContainer.append(card1, card2, card3);


const modal = createModal({
  title: "Welcome!",
  content: "This modal is created using a reusable JavaScript function."
});

const modalButton = createButton({
  text: "Open Modal",
  variant: "primary",
  onClick: () => {
    modal.open();
  }
});

document
  .getElementById("modal-demo")
  .appendChild(modalButton);

const toastDemo = document.getElementById("toast-demo");

const successToastButton = createButton({
  text: "Success Toast",
  variant: "success",
  onClick: () => {
    createToast({
      message: "Successfully completed!",
      type: "success",
      duration: 3000
    });
  }
});

const errorToastButton = createButton({
  text: "Error Toast",
  variant: "danger",
  onClick: () => {
    createToast({
      message: "Something went wrong!",
      type: "error",
      duration: 3000
    });
  }
});

toastDemo.append(
  successToastButton,
  errorToastButton
);