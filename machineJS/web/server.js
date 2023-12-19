const server = Bun.serve({
  port: 3209,
  fetch(req) {
    return new Response(Bun.file("/home/user/src/js/ML-JS/web/creator.html"));
  },
});

console.log(`Server up....on port: ${server.port}`);
