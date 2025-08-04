import {DataTypes} from 'sequelize'
import {sequelize} from './sequalize.js'


const User = sequelize.define("user", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM("ADMIN", "RECRUITER", "CANDIDATE"),
    defaultValue:"CANDIDATE",
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  is_company_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: "user",
  timestamps: true, // createdAt & updatedAt
});

export default User;