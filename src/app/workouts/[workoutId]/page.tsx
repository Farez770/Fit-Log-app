import { IWorkOutType } from "@/types/type";
// import { FaRegBookmark, FaRegCalendarCheck } from "react-icons/fa";
import Image from "next/image";
// import { notFound } from "next/navigation";
import AddTodaysPlan from "@/components/workoutDetails/AddTodaysPlanBtn";
import SavedWorkout from "@/components/workoutDetails/SavedWorkoutBtn";
import NotFound from "@/app/not-found";

const getWorkoutData = async (): Promise<IWorkOutType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data: IWorkOutType[] = await res.json();
  return data;
};

const Page = async ({ params }: { params: Promise<{ workoutId: string }> }) => {
  const { workoutId } = await params;
  const workoutData = await getWorkoutData();

  const workout = workoutData.find(
    (excerxise) => String(excerxise.id) === String(workoutId),
  );

  if (!workout) {
    return NotFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white sm:px-6 md:py-10 lg:px-8 lg:py-12">
      <section className="mx-auto max-w-[1250px]">
        <div className="grid overflow-hidden rounded-2xl border border-[#292c34] bg-[#101216] lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative min-h-[400px] w-full sm:min-h-[500px] lg:min-h-[700px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-2xl p-2"
            />
          </div>

          {/* Right Side - Details */}
          <div className="flex flex-col p-5 sm:p-7 md:p-8 lg:p-9">
            {/* Title */}
            <h1 className="text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-[650px] text-sm leading-6 text-[#9CA3AF] sm:text-base">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Specs */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#292c34] bg-[#171a20]">
              <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] sm:text-xs">
                  Equipment
                </span>
                <span className="text-xs text-white sm:text-sm">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] sm:text-xs">
                  Difficulty
                </span>
                <span className="text-xs text-white sm:text-sm">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] sm:text-xs">
                  Sets
                </span>
                <span className="text-xs text-white sm:text-sm">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] sm:text-xs">
                  Reps
                </span>
                <span className="text-xs text-white sm:text-sm">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] sm:text-xs">
                  Duration
                </span>
                <span className="text-xs text-white sm:text-sm">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] sm:text-xs">
                  Calories
                </span>
                <span className="text-xs text-white sm:text-sm">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#9CA3AF] sm:text-xs">
                  Rating
                </span>
                <span className="text-xs text-white sm:text-sm">
                  {workout.rating}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={instruction}
                    className="flex gap-3 text-xs leading-5 text-[#9CA3AF] sm:text-sm"
                  >
                    <span className="shrink-0 text-[#C2F800]">
                      {index + 1}.
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <AddTodaysPlan workout={workout} />

              <SavedWorkout workout={workout} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
