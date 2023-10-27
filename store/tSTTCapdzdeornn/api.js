import axios from "axios"
import {
  TST_TC1047APDZDEORNN_PASSWORD,
  TST_TC1047APDZDEORNN_USERNAME
} from "react-native-dotenv"
const tSTTCapdzdeornn = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047APDZDEORNN_PASSWORD,
    password: TST_TC1047APDZDEORNN_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
