import React from "react";

const Footer = () => {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/omar.shahariar.afrid"
            role="button"
            target="_blank"
          >
            <i class="fa fa-facebook-f"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/omarshahariar/"
            role="button"
            target="_blank"
          >
            <i class="fa fa-instagram"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/md-omar-shahariar-6045a6146/"
            role="button"
            target="_blank"
          >
            <i class="fa fa-linkedin"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://github.com/Md-Omar-Shahariar"
            role="button"
            target="_blank"
          >
            <i class="fa fa-github"></i>
          </a>
        </section>
      </div>

      <div class="text-center p-3">© 2022 Copyright</div>
    </footer>
  );
};

export default Footer;
