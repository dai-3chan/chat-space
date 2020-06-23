## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- bolongs_to :user


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: true|
|image|string|foreign_key: true|
|group_id|integer|null: false, foreign_key: ture|
|user_id|integer|null: false, foreign_key: ture|

### Association
- belongs_to :group
- belongs_to :user


## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|
|message_id|foreign_key: ture|

### Assosiation
- has_many :massage


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique: true|