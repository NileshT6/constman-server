var DataStore = require('nedb');

export class Database {   
    public userDB :any;
    public projectDB : any;
    public materialDB : any;

    constructor() {        
    }

    public loadDatabases(){
        this.userDB =  new DataStore({ filename : 'databases/users.db',  autoload : true});
        this.projectDB =  new DataStore({ filename : 'databases/projects.db',  autoload : true}); 
        this.materialDB =  new DataStore({ filename : 'databases/matrerials.db',  autoload : true});   
          
        this.seedData();   
    }

    private seedData(){

    }
}

export default Database;