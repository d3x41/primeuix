# PRIMEUIX

PrimeUIX is a shared package between all Prime libraries, this shared approach allows PrimeTek teams to share theming and the Design team who is responsible for the Figma UI Kit to work on a single design file, which is the single source of truth.

### Setup

> [!IMPORTANT]
> This project requires **pnpm 9.6.0 or later**. Please ensure the correct version is installed before proceeding.

1. **Initialize Git Submodules**
   On a fresh clone, submodules must be initialized before running any setup commands:

   ```sh
   git submodule update --init --recursive
   ```

2. **Link Dependencies**  
   Run the following command to link dependencies:

   ```sh
   pnpm run link
   ```

   If any issues occur, it may be necessary to manually run the following command for each package inside the `packages` folder:

   ```sh
   cd packages/forms && pnpm run dev:link
   cd packages/themes && pnpm run dev:link
   ...
   ```

   In some cases, permission issues might require using `sudo`. For example:

   ```sh
   cd packages/themes && sudo pnpm run dev:link
   ...
   ```

> [!NOTE]
> This linking process only needs to be performed once.

3. **Setup the Project**  
   Run the following command to bootstrap the workspace:

   ```sh
   pnpm run setup
   ```

4. **Start Development Server**  

- For **Angular**:

     ```sh
     pnpm run ng:dev
     ```

- For **React**:

     ```sh
     pnpm run react:dev
     ```

- For **Vue**:

     ```sh
     pnpm run vue:dev
     ```

### Submodules

This project includes **PrimeNG**, **PrimeReact** and **PrimeVue** as submodules. To update these submodules, run the following command:

   ```sh
   git submodule foreach git pull origin master
   ```

All set! Happy coding! 🚀
