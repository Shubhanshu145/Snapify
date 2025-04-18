export default () => {
    return {
        db:{
            dialect:process.env.dialect,
            host:process.env.host,
            port:process.env.port,
            username:process.env.username,
            password:process.env.password,
            database:process.env.database,
            models:process.env.models
        },
        jwt:{
            secret: process.env.JWT_SECRET,
            expiry: process.env.JWT_EXPIRY
        },
        cd:{
            cloud_name: process.env.cloud_name,
            api_key:process.env.api_key,
            api_secret:process.env.api_secret
        }
        
    }
}