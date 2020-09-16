// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class employee extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   employee.init({
//     name: DataTypes.STRING,
//     department: DataTypes.STRING,
//     gender: DataTypes.STRING,
//     birth: DataTypes.DATE,
//     joined_date: DataTypes.DATE,
//     pay: DataTypes.BIGINT,
//     note: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'employee',
//     underscored: true,
//   });
//   return employee;
// };
  
'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth: DataTypes.DATE,
    joined_date: DataTypes.DATE,
    pay: DataTypes.BIGINT,
    note: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true, // cf. https://stackoverflow.com/questions/21114499/how-to-make-sequelize-use-singular-table-names
  });
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};