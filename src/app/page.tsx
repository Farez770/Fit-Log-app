import HomeBanner from "@/components/homeworkoutpage/HomeBanner";
// import WorkoutPage from "./workouts/page";
import WorkoutLibraray from "@/components/homeworkoutpage/WorkoutLibraray";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Suspense
        fallback={<p className="text-center text-2xl ">Data is loading...</p>}
      >
        <WorkoutLibraray />
      </Suspense>
    </div>
  );
}
