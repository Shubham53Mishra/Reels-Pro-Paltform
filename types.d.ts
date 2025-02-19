 /* eslint-disable no-var */
 import{Connection} from 'mongoose'
 

declare global {
    
    var mongoose: {
      conn:connection|null
      promise: promise<Connection> | null
    }
}
export {}