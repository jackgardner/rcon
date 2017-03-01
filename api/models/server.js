export default (sequelize, DataTypes) => {
  const Server = sequelize.define('server', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  return Server
}
