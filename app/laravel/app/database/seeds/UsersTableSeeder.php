<?php
use App\Models\User;
class UsersTableSeeder extends Seeder {
    public function run()
    {
        DB::table('users')->delete();

        User::create(array('user_id'         => 1,
                        'user_first_name' => 'Calin',
                        'user_last_name'  => 'Negreanu',
                        'user_location'   => 1,
                        'user_name'       => 'cnegreanu',
                        'user_password'   => '1234'
        ));
    }
}