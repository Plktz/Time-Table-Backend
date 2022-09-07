module.exports = {
    ROUTES :{
        HOME:'/',
        USER:{
            LOGIN :'/login',
            REGISTER:'/register'
        },
        ELEMENT:{
            ADD:'/add',
            DELETE:'/delete',
            UPDATE:'/update',
            READ:'/read'
        },
        CLASS:{
            ADD:'/add',
            DELETE:'/delete',
            UPDATE:'/update',
            READ:'/read'
        },
        SUBJECT:{
            ADD:'/add',
            DELETE:'/delete',
            UPDATE:'/update',
            READ:'/read'
        },
        TEACHER:{
            ADD:'/add',
            DELETE:'/delete',
            UPDATE:'/update',
            READ:'/read'
        },
        ROOM:{
            ADD:'/add',
            DELETE:'/delete',
            UPDATE:'/update',
            READ:'/read'
        },
        EVENT:{
            ADD:'/add',
            DELETE:'/delete',
            UPDATE:'/update',
            READ:'/read'
        }
    },
    STATUS_CODE:{
        SUCCESS:200,
        INTERNAL_SERVER_ERROR:500,
        NOT_FOUND : 404

    },
    SCHEMAS:{
        USER:'users',
        CLASS:'classes',
        ROOM:'rooms',
        SUBJECT: 'subjects',
        TEACHER: 'teachers',
        EVENT: 'events',
    }
}