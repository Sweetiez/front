import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Title from "../utils/Title";
import PhoneInput from "react-phone-number-input";
import ProfileModel from "./ProfileModel";
import Label from "../utils/Label";
import UpdateProfileRequest from "../../hooks/user/requests/UpdateProfileRequest";
import {updateProfile} from "../../hooks/user/users";

interface EditProfileFormProps {
    profile?: ProfileModel;
    manageCloseModal: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({profile, manageCloseModal}) => {
    const { t } = useTranslation();
    const [value, setValue] = useState<any>(profile?.phone);
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    const editProfile = async (event: any) => {
        event.preventDefault();

        if (
            event.target.lastname.value.length < 2 ||
            event.target.lastname.value.length > 24
        ) {
            setMessage(t('authentication.register.error.lastname'));
            setStatus('Error');
            return;
        }

        if (
            event.target.firstname.value.length < 2 ||
            event.target.firstname.value.length > 24
        ) {
            setMessage(t('authentication.register.error.firstname'));
            setStatus('Error');
            return;
        }

        const request = new UpdateProfileRequest(
            profile?.id,
            event.target.lastname.value,
            event.target.firstname.value,
            event.target.email.value,
            event.target.phone.value,
        );
        try {
            await updateProfile(request);
            manageCloseModal()
        } catch (e) {
            setMessage(t('authentication.register.apiResponses.failure'));
            setStatus('Error');
        }

    };
    return (
        <>
            <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
                <Title label={t('profile.forms.editProfile.title')} />
                <form onSubmit={editProfile}>
                    <div className="mb-8">
                        <div className="mb-4">
                            <input
                                className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
                                id="firstname"
                                type="text"
                                placeholder={t('authentication.register.firstname')}
                                required={true}
                                defaultValue={profile?.firstName}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
                                id="lastname"
                                type="text"
                                placeholder={t('authentication.register.lastname')}
                                required={true}
                                defaultValue={profile?.lastName}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
                                id="email"
                                type="email"
                                placeholder={t('authentication.register.email')}
                                required={true}
                                defaultValue={profile?.email}
                            />
                        </div>

                        <div className="mb-4">
                            <PhoneInput
                                id="phone"
                                defaultCountry="FR"
                                placeholder="Phone number"
                                value={value}
                                onChange={setValue}
                            />
                        </div>

                    </div>
                    <div className="flex justify-center mb-2">
                        <Label status={status} message={message} />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-gold-100 hover:bg-blue-dark text-white font-bold py-2 px-12 rounded transform transition duration-200 hover:scale-105"
                            type="submit"
                        >
                            {t('profile.forms.validate')}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProfileForm;
