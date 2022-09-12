module.exports = {
    ROUTES :{
        HOME:'/',
        USER:{
            USER: '/user',
            LOGIN :'/login',
            REGISTER:'/register'
        },
        ELEMENT:{
            ADD:'/add',
            DELETE:'/delete',
            UPDATE:'/update',
            FIND:'/find',
        },
        CLASS:{
            CLASS: '/class'
        },
        SUBJECT:{
            SUBJECT: '/subject'
        },
        TEACHER:{
            TEACHER: '/teacher'
        },
        ROOM:{
            ROOM: '/room'
        },
        TIMETABLE:{
            TIMETABLE: '/timetable',
            CREATE: '/create'
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