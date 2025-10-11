import {
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  CheckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const BigInfoWithImage = ({
  index,
  image,
  title,
  description,
  features,
  ctaLink,
  ctaText,
}) => {
  return (
    <div
      key={index}
      className="flex-1 outline-1 outline-gray-200 flex flex-col"
    >
      <div className="w-full add-border-page-full relative">
        <Image
          src={image}
          alt={title}
          width={1800}
          height={1800}
          className="w-full h-full object-cover aspect-square"
        />
      </div>

      <div className="py-5 px-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      </div>
      <div className="pt-5 pb-5 px-4">
        <p className="text-gray-500">{description}</p>
      </div>
      {features && (
        <div className="py-4 -mt-3 px-4">
          <ul>
            {features.map((feature) => (
              <li
                className="flex items-center text-sm text-gray-700 py-1"
                key={feature}
              >
                <span className="mr-1">
                  <CheckBadgeIcon className="w-5 h-5 text-green-800" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {ctaText && (
        <div className="py-4 px-4 text-sm border-t border-gray-200">
          <Link href={ctaLink}>
            <div className="flex items-center gap-2 text-gray-500 hover:text-blue-800 group">
              <span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </span>
              <span className="group-hover:underline"> {ctaText}</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BigInfoWithImage;
