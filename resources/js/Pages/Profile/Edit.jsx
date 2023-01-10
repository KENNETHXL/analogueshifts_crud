import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/inertia-react';
import Profile from './Partials/Profile';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            auth={auth}
        >
            <div className="min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-3 md:px-8">
                    {/* user profile information */}
                    <div className='grid md:grid-cols-3 gap-5 bg-yellow-50 p-3 md:p-6 m-2 md:m-3 rounded-lg'>
                        <div className='grid gap-3 md:col-span-1'>
                            <Profile />
                            <div className="grid md:col-span-1 p-3 bg-yellow-50 rounded-lg border border-gray-200 shadow-md">
                                <div className="mb-6">
                                    <UpdatePasswordForm className="max-w-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:col-span-2 gap-3 p-3 bg-yellow-50 rounded-lg border border-gray-200 shadow-md relative">                            
                            <div className="p-4 sm:p-8 bg-yellow-50 shadow sm:rounded-lg">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                            </div>
                            <div className="p-4 sm:p-8 bg-yellow-50 shadow sm:rounded-lg">
                                <DeleteUserForm className="max-w-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
