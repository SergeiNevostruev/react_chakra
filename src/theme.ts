import { createSystem, defineConfig, defaultBaseConfig, defaultConfig } from "@chakra-ui/react"

const config = defineConfig({   ...defaultConfig
//   theme: {
//   tokens: {
//     colors: {
//       primary: { value: "#0FEE0F" },
//       secondary: { value: "#EE0F0F" },
//     },
//     fonts: {
//       body: { value: "system-ui, sans-serif" },
//     },
//   },
// },
})
  
  const system = createSystem(config)
  
  export default system