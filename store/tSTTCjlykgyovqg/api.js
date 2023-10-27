import axios from "axios"
import {
  TST_TC1047JLYKGYOVQG_USERNAME,
  TST_TC1047JLYKGYOVQG_PASSWORD
} from "react-native-dotenv"
const tSTTCjlykgyovqg = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047JLYKGYOVQG_USERNAME,
    password: TST_TC1047JLYKGYOVQG_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
