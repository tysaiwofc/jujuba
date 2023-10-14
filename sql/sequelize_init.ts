import { Sequelize } from 'sequelize'
import setGuildModel from './Schemas/Guild'
import setUserModel from './Schemas/User';
import setAdventureModel from './Schemas/Adventure'

export default class Database {
  static users: any;
  static createUser(arg0: { id: string | string[] | undefined; }) {
    throw new Error('Method not implemented.');
  }
  static updateUser(id: string | string[] | undefined, arg1: string) {
    throw new Error('Method not implemented.');
  }
  db: Sequelize;
  guilds: any;
  users: any;
  adventure: any;

  constructor() {
    this.db = new Sequelize(process.env.POSTGRES_URL as string, { dialect: 'postgres' } );
    this.guilds = setGuildModel(this.db);
    this.users = setUserModel(this.db);
    this.adventure = setAdventureModel(this.db);
  }

  async createGuild(options: any) {
    return await this.guilds.create(options);
  }

  async updateGuild(id: any, options: any) {
    return await this.guilds.update(options, {
      where: {
        id: id
      }
    });
  }

  async findGuild(id: any) {
    return await this.guilds.findOne({
      where: {
        id: id
      }
    });
  }

  async createUser(options: any) {
    return await this.users.create(options);
  }

  async updateUser(id: any, options: any) {
    return await this.users.update(options, {
      where: {
        id: id
      }
    });
  }

  async findUser(id: any) {
    return await this.users.findOne({
      where: {
        id: id
      }
    });
  }
}
