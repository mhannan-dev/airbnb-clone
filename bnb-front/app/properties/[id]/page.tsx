import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ReservationSidebar from '@/app/components/ReservationSidebar';

const PropertyDetailPage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach_1.jpg"
          className="object-cover w-full h-full"
          alt="Beach house"
        />
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>

          <span className="mb-6 block text-lg text-gray-600">
            1 guests - 2 bedrooms - 3 bathrooms
          </span>

          <hr className="mb-6" />

          <Link href="#" className="py-6 flex items-center space-x-4">
            <Image
              src="/user_profile_image.png"
              width={50}
              height={50}
              className="rounded-full"
              alt="The user name"
            />
            <p className="font-semibold">Hosted by Muhammad Hannan</p>
          </Link>

          <hr className="mb-6" />

          <p className="mt-6 text-lg">
            Formerly a railway station in the heart of Paris 125 years ago, the Musée d’Orsay is now one of the finest museums in the world, boasting the largest collection of Impressionist paintings. All the original architectural features have been preserved, including the iconic and monumental clock visible from inside and out.

            For one night only, like a marvelous apparition, the clock room will become your bedroom. Adorned entirely in wood paneling, from the Versailles parquet floor to the vaulted ceiling, this space is designed as a daydream. The oversized glass and steel clock offer unparalleled views of the city, enhancing the beauty of the Parisian night. Your bed, suspended above the ground and the city, is the centerpiece. Two luminous ceramic flowers frame the headboard, while expansive, organically shaped sofas create a private lounge ambiance.

            Included in the decor is the Paris 2024 Olympic torch, which I designed, displayed in its dedicated alcove, facing a padded punching bag for a personal sporting touch so that you can take part in the competition yourself! Since the most beautiful room must have the most beautiful balcony, the Museum’s large terrace will also be reserved for you. Paris is yours; the Ceremony can begin...
          </p>
        </div>
        <ReservationSidebar/>
      </div>
    </>
  );
}

export default PropertyDetailPage;
