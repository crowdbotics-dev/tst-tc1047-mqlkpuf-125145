import axios from "axios"
import {
  TST_TC1047CYZGQCXSBW_USERNAME,
  TST_TC1047CYZGQCXSBW_PASSWORD
} from "react-native-dotenv"
const tSTTCcyzgqcxsbw = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047CYZGQCXSBW_USERNAME,
    password: TST_TC1047CYZGQCXSBW_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
