export default {
    client: {
        bundle: true, 
        name: '@hey-api/client-axios',
      },
    input: './openapi.json',
    output: 'src/client',
    plugins: [
        '@tanstack/react-query', 
      ],
  };