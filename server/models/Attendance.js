module.exports = (sequelize, DataTypes) =>{
  const Attendance = sequelize.define("Attendance",{
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    studentID:{
      type: DataTypes.INTEGER
    },
    courseID:{
      type: DataTypes.INTEGER
    }
  })

  return Attendance
}