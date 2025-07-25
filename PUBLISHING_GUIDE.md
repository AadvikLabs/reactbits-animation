# Publishing Guide for @aadviklabs/reactbits-animation

This guide describes how to publish updates to the ReactBits Animations package on npm.

---

## 1. Prerequisites
- You must be a maintainer of the [AadvikLabs/reactbits-animation](https://github.com/AadvikLabs/reactbits-animation) repository.
- You need an npm account with publish access to the `@aadviklabs` scope.
- Node.js and npm installed locally.

---

## 2. Build the Package

```bash
npm install
npm run build
```

This will generate the production-ready files in the `dist/` directory.

---

## 3. Versioning
- Follow [Semantic Versioning](https://semver.org/): MAJOR.MINOR.PATCH
- Update the `version` field in `package.json` for each release.
- Document changes in the changelog (if available).

---

## 4. Publishing to npm

```bash
npm login
npm publish --access public
```

- Ensure the package name is `@aadviklabs/reactbits-animation`.
- Only publish from the `main` branch.

---

## 5. After Publishing
- Verify the package on [npmjs.com](https://www.npmjs.com/package/@aadviklabs/reactbits-animation)
- Announce the release in the repository (GitHub Releases or Discussions)

---

## 6. Troubleshooting
- If you encounter permission errors, ensure your npm account has access to the `@aadviklabs` scope.
- For 2FA, use your authentication app or recovery codes.

---

## 7. Contact
For issues, contact [Aadviklabs](https://www.aadviklabs.com) or open an issue on [GitHub](https://github.com/AadvikLabs/reactbits-animation/issues).
