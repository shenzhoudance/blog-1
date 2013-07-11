# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  log = Logger.new(STDOUT)
  admin_name = 'admin'
  admin_email = 'admin@admin.com'
  admin_password = 'admin123'
  log.info('------Create admin ------')
  Admin.create!(:email => admin_email,
                :password => admin_password,
                :password_confirmation => admin_password
               )
