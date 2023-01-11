import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/Utils/InputError';
import InputLabel from '@/Components/Utils/InputLabel';
import PrimaryButton from '@/Components/Utils/PrimaryButton';
import TextInput from '@/Components/Utils/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import ShowPassword, { ShowPassword2 } from '@/Components/ShowPassword';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Name" />

                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />
                    <div className="mt-1 block w-full relative">
                        <TextInput
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            className="block w-full"
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                        />
                        <ShowPassword />
                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />
                    
                    <div className="mt-1 block w-full relative">
                        <TextInput
                            type="password"
                            name="password_confirmation"
                            id="password2"                 
                            value={data.password_confirmation}
                            className="block w-full"
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                        />
                        <ShowPassword2 />
                    </div>

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
