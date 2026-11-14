# booking-system

To install dependencies:

```bash
bun install
```

Set `DATABASE_URL` to your PostgreSQL connection string in a `.env` file in the
project root, or provide it as an environment variable. Do not commit the
`.env` file.

To run:

```bash
bun run index.ts
```

To run the room query from the project root:

```bash
bun src/repositories/room.repository.ts
```

The query requires a reachable PostgreSQL database with the expected schema. It
does not currently print the returned rooms.

This project was created using `bun init` in bun v1.4.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
