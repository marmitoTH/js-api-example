const { EntitySchema } = require('typeorm')
const User = require('../../../domain/User')

module.exports = new EntitySchema({
  target: User,
  tableName: 'users',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
      update: false
    },
    name: {
      type: 'varchar'
    },
    email: {
      type: 'varchar',
      unique: true
    },
    password: {
      type: 'varchar'
    },
    phoneNumber: {
      type: 'varchar'
    },
    createdAt: {
      type: 'timestamp',
      name: 'created_at',
      createDate: true,
      update: false
    },
    updatedAt: {
      type: 'timestamp',
      name: 'updated_at',
      updateDate: true
    }
  }
})
