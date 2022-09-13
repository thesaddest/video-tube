import { FC } from "react";
import styles from "./SubscribeButton.module.scss";
import cn from "classnames";
import { BsPersonPlusFill } from "react-icons/bs";
import { useAuth } from "@/hooks/useAuth";
import { api } from "@/store/api/api";
const SubscribeButton: FC<{ channelIdForSubscribe: number }> = ({
	channelIdForSubscribe
}) => {
	const { user } = useAuth();
	const { data: profile } = api.useGetProfileQuery(null, {
		skip: !user
	});
	const [subscribe, { isLoading, data }] = api.useSubscribeToChannelMutation();

	if (user?.id === channelIdForSubscribe) return null;

	const isSubscribed = profile?.subscriptions?.some(
		sub => sub.toChannel.id === channelIdForSubscribe || !!data
	);

	return (
		<button
			className={cn(styles.button, {
				[styles.subscribed]: isSubscribed
			})}
			onClick={() => subscribe(channelIdForSubscribe).unwrap()}
			disabled={isLoading}
		>
			<BsPersonPlusFill />
			{isSubscribed ? "Already subscribed" : "Subscribe"}
		</button>
	);
};

export default SubscribeButton;
