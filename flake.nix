{
  description = "EGN Website dev environment (simplified)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Rust
            rustc cargo clippy rustfmt
            # Node (Angular 19 compatible) + Angular CLI
            nodejs_20
            nodePackages."@angular/cli"
            # Native deps commonly needed (OpenSSL + pkg-config)
            openssl pkg-config
          ];

          RUST_BACKTRACE = "1";
          RUST_LOG = "debug";
          PKG_CONFIG_PATH = "${pkgs.openssl.dev}/lib/pkgconfig";

          shellHook = ''
            # Minimal adjustments; no noisy output.
            export NPM_CONFIG_PREFIX="$PWD/.npm-global"
            export PATH="$NPM_CONFIG_PREFIX/bin:$PATH"
            mkdir -p "$NPM_CONFIG_PREFIX"
          '';
        };
      }
    );
}
