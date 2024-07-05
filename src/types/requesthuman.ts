export interface requestHumanResults {
    gender:string,
    name:{
        title:string,
        first:string,
        last:string
    },
    location:{
        street:{
            number:number,
            name:string
        },
        city:string,
        state:string,
        country:string,
        postcode:number,
        coordinates:{
            latitude:string,
            longitude:string
        },
        timezone:{
            offset:string,
            description:string
        },
    },
    email:string,
    login:{
        uuid:string,
        username:string,
        password:string
    },
    dob:{
        age:string
    }
    phone:string,
    cell:string,
    id:{
        name:string,
        value:string
    },
    picture:{
        large:string,
        medium:string,
        thumbnail:string
    },
    nat:string
}