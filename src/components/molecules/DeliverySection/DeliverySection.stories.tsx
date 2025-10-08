import { Meta } from '@storybook/nextjs';
import DeliverySection from './DeliverySection';

export const Default = () => {
  return <DeliverySection />;
};

const deliverySection: Meta<typeof DeliverySection> = {
  title: 'Molecules/DeliverySection',
  component: DeliverySection,
  tags: ['autodocs'],
};

export default deliverySection;
