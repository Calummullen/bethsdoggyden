import { Main } from "@/components/doggy-dev/Main";
import { Review } from "@/components/doggy-dev/reviews/ReviewSummary";
import { createClient } from "@/utils/supabase/server";

const LandingPage = async () => {
  const supabase = createClient();
  const { data: reviews } = await supabase.from("reviews").select();
  const formattedReviews: Review[] =
    reviews?.map(({ description, review_date, reviewer, rating }: Review) => ({
      description,
      review_date,
      reviewer,
      rating,
    })) ?? [];
  return <Main reviews={formattedReviews} />;
};

export default LandingPage;
