import { IWorkOutType } from "@/types/type";
// import { Clock3, Flame, Star } from "lucide-react";
import { FaRegClock, FaFire, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IWorkoutCardProps {
  workout: IWorkOutType;
}

const WorkoutCards = ({ workout }: IWorkoutCardProps) => {
  const {
    id,
    image,
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link href={`/workouts/${id}`} className="block h-full">
      <div className="h-full overflow-hidden rounded-2xl border border-[#282b33] bg-[#15171c] transition duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40">
        {/* Image */}
        <div className="relative aspect-[2/1] w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Tags */}
          <div className="mb-5 flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black sm:text-sm"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout name */}
          <h2 className="text-lg font-extrabold uppercase leading-tight text-white sm:text-xl">
            {name}
          </h2>

          {/* Equipment */}
          <p className="mt-2 text-sm text-[#9CA3AF] sm:text-base">
            {equipment}
          </p>

          {/* Divider */}
          <div className="my-5 h-px bg-[#292c34]" />

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#9CA3AF] sm:gap-6">
            <div className="flex items-center gap-2">
              <FaRegClock size={18} strokeWidth={1.8} />
              <span>{duration} min</span>
            </div>

            <div className="flex items-center gap-2">
              <FaFire size={18} strokeWidth={1.8} />
              <span>{caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              <FaStar size={18} strokeWidth={1.8} />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCards;
