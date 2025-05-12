import { Meta, StoryObj } from '@storybook/react';
import { Tip } from './Tip';
import type { CSSProperties } from 'react';
import React from 'react';

const meta: Meta<typeof Tip> = {
  title: 'Components/Tip',
  component: Tip,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Tip>;

const wrapperStyle: CSSProperties = {
  position: 'relative',
  padding: '60px',
  height: '400px',
  border: '1px dashed #ccc',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  alignItems: 'flex-start',
};

export const Default: Story = {
  render: () => (
    <div style={wrapperStyle}>
      <Tip title="Базовый тултип">
        <button>Наведи на меня</button>
      </Tip>
    </div>
  ),
};

export const FollowCursor: Story = {
  render: () => (
    <div style={{ ...wrapperStyle, height: '300px' }}>
      <Tip title="Следую за курсором" followCursor showDelay={500}>
        <button>Наведи на меня (followCursor)</button>
      </Tip>
    </div>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <div style={wrapperStyle}>
      <Tip title="Полный текст тултипа, который спрятан под обрезкой">
        <div
          style={{
            maxWidth: '150px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            background: '#efefef',
            padding: '8px',
          }}
        >
          Полный текст тултипа, который спрятан под обрезкой
        </div>
      </Tip>
    </div>
  ),
};

export const ResizeDemo: Story = {
  render: () => (
    <div style={wrapperStyle}>
      <Tip title="Я следую за размерами">
        <div
          style={{
            resize: 'horizontal',
            overflow: 'auto',
            minWidth: '100px',
            maxWidth: '300px',
            padding: '8px',
            background: '#d0f0ff',
            border: '1px solid #99c',
            borderRadius: '6px',
            cursor: 'ew-resize',
            whiteSpace: 'nowrap',
          }}
        >
          Потяни меня за правый край →
        </div>
      </Tip>
    </div>
  ),
};
