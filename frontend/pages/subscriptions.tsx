import React from "react";
import { api } from "@/store/api/api";
import Layout from "@/components/layout/Layout";
import Menu from "@/components/layout/sidebar/menu/Menu";
import { NextPageAuth } from "@/providers/private-route.inteface";

const MySubscriptionsPage: NextPageAuth = () => {
	const { data } = api.useGetProfileQuery(null);
	return (
		<Layout title="My Subscriptions">
			<Menu
				title="My subscriptions"
				items={
					data?.subscriptions.map(({ toChannel }) => ({
						title: toChannel.name,
						image: toChannel.avatarPath,
						link: `/c/${toChannel.id}`
					})) || []
				}
			/>
		</Layout>
	);
};

MySubscriptionsPage.isOnlyUser = true;

export default MySubscriptionsPage;
