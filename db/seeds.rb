# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end 

ninti = User.create!(
    name: 'Ninti Chance',
    username: 'nini',
    email: 'ninti@test.com',
    phone: '1-478-461-6804',
    image: 'https://i.imgur.com/QKCVUFz.jpg?3',
    password: 'august05',
    password_confirmation: 'august05'
)

lula = User.create!(
    name: 'Lula Bjork',
    username: 'lulibell',
    email: 'lula@test.com',
    phone: '1-478-461-6804',
    image: 'https://i.imgur.com/WBXzxcm.jpg?1',
    password: 'lula1234',
    password_confirmation: 'lula1234'
)

joe = User.create!(
    name: 'Joey McJosev',
    username: 'moseph',
    email: 'joe@test.com',
    phone: '+ 1 (478) 461-6804',
    image: 'https://i.imgur.com/Etaoghi.jpg?1',
    password: 'joey1234',
    password_confirmation: 'joey1234'
)

ninti.contacts.create!(
    name: 'Vinod Subramanian',
    username: 'vinu',
    image: 'https://i.imgur.com/YPgpwN6.png',
    relation: 'date',
    instagram: 'willowsmith',
    twitter: 'Zendaya',
    facebook: 'janellemonae/',
    email: FFaker::Internet.email,
    phone: '+ 1 (404) 966-8440',
    street: FFaker::Address.street_address,
    city: FFaker::Address.city,
    zip: FFaker::AddressDA.zip_code
)

3.times do
    lula.contacts.create!(
        name: FFaker::Name.name,
        username: FFaker::Internet.user_name,
        image: 'https://i.imgur.com/YPgpwN6.png',
        relation: 'friend',
        instagram: 'willowsmith',
        twitter: 'Zendaya',
        facebook: 'janellemonae/',
        email: FFaker::Internet.email,
        phone: FFaker::PhoneNumber.short_phone_number,
        street: FFaker::Address.street_address,
        city: FFaker::Address.city,
        zip: FFaker::AddressDA.zip_code
    )
  end
  
  3.times do
    lula.contacts.create!(
        name: FFaker::Name.name,
        username: FFaker::Internet.user_name,
        image: 'https://i.imgur.com/zhr02Wu.png',
        relation: 'family',
        instagram: 'willowsmith',
        twitter: 'Zendaya',
        facebook: 'janellemonae/',
        email: FFaker::Internet.email,
        phone: FFaker::PhoneNumber.short_phone_number,
        street: FFaker::Address.street_address,
        city: FFaker::Address.city,
        zip: FFaker::AddressDA.zip_code
    )
  end

  3.times do
    lula.contacts.create!(
        name: FFaker::Name.name,
        username: FFaker::Internet.user_name,
        image: 'https://i.imgur.com/ZJ8vxSg.png',
        relation: 'date',
        instagram: 'willowsmith',
        twitter: 'Zendaya',
        facebook: 'janellemonae/',
        email: FFaker::Internet.email,
        phone: FFaker::PhoneNumber.short_phone_number,
        street: FFaker::Address.street_address,
        city: FFaker::Address.city,
        zip: FFaker::AddressDA.zip_code
    )
  end

  3.times do
    lula.contacts.create!(
        name: FFaker::Name.name,
        username: FFaker::Internet.user_name,
        image: 'https://i.imgur.com/wtStofP.png',
        relation: 'class',
        instagram: 'willowsmith',
        twitter: 'Zendaya',
        facebook: 'janellemonae/',
        email: FFaker::Internet.email,
        phone: FFaker::PhoneNumber.short_phone_number,
        street: FFaker::Address.street_address,
        city: FFaker::Address.city,
        zip: FFaker::AddressDA.zip_code
    )
  end

  3.times do
    lula.contacts.create!(
        name: FFaker::Name.name,
        username: FFaker::Internet.user_name,
        image: 'https://i.imgur.com/TeZkOUQ.png',
        relation: 'job',
        instagram: 'willowsmith',
        twitter: 'Zendaya',
        facebook: 'janellemonae/',
        email: FFaker::Internet.email,
        phone: FFaker::PhoneNumber.short_phone_number,
        street: FFaker::Address.street_address,
        city: FFaker::Address.city,
        zip: FFaker::AddressDA.zip_code
    )
  end

  3.times do
    lula.contacts.create!(
        name: FFaker::Name.name,
        username: FFaker::Internet.user_name,
        image: 'https://i.imgur.com/MsxdlnD.png',
        relation: 'network',
        instagram: 'willowsmith',
        twitter: 'Zendaya',
        facebook: 'janellemonae/',
        email: FFaker::Internet.email,
        phone: FFaker::PhoneNumber.short_phone_number,
        street: FFaker::Address.street_address,
        city: FFaker::Address.city,
        zip: FFaker::AddressDA.zip_code
    )
  end

  3.times do
    lula.contacts.create!(
        name: FFaker::Name.name,
        username: FFaker::Internet.user_name,
        image: 'https://i.imgur.com/y9gdD70.png',
        relation: 'other',
        instagram: 'willowsmith',
        twitter: 'Zendaya',
        facebook: 'janellemonae/',
        email: FFaker::Internet.email,
        phone: FFaker::PhoneNumber.short_phone_number,
        street: FFaker::Address.street_address,
        city: FFaker::Address.city,
        zip: FFaker::AddressDA.zip_code
    )
  end