import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Star, Users } from 'lucide-react';
import { techStacks } from '../data/techStacks';

const ComparisonPage = () => {
  const [leftId, setLeftId] = useState<string>(techStacks[0]?.id || '');
  const [rightId, setRightId] = useState<string>(techStacks[1]?.id || techStacks[0]?.id || '');

  const leftStack = useMemo(() => techStacks.find(s => s.id === leftId), [leftId]);
  const rightStack = useMemo(() => techStacks.find(s => s.id === rightId), [rightId]);

  const renderHeader = (title: string) => (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Compare key attributes of two tech stacks side by side.
      </p>
    </div>
  );

  const Selector = ({
    label,
    value,
    onChange,
    excludeId,
  }: {
    label: string;
    value: string;
    onChange: (val: string) => void;
    excludeId?: string;
  }) => (
    <div className="flex-1">
      <label className="block text-sm text-gray-400 mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white"
      >
        {techStacks
          .filter(s => !excludeId || s.id !== excludeId)
          .map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
      </select>
    </div>
  );

  const InfoRow = ({ label, left, right }: { label: string; left?: React.ReactNode; right?: React.ReactNode }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-white/10">
      <div className="text-gray-400">{label}</div>
      <div className="text-white">{left ?? '-'}</div>
      <div className="text-white">{right ?? '-'}</div>
    </div>
  );

  const renderTags = (tags?: string[]) => (
    <div className="flex flex-wrap gap-2">
      {(tags || []).slice(0, 8).map((t, i) => (
        <span key={`${t}-${i}`} className="px-2 py-1 text-xs rounded-full bg-gray-800 border border-gray-700 text-gray-200">{t}</span>
      ))}
      {(tags && tags.length > 8) && (
        <span className="text-xs text-gray-400">+{tags.length - 8} more</span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-white hover:text-gray-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        {renderHeader('Compare Tech Stacks')}

        <div className="bg-black border border-white/10 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Selector label="Left" value={leftId} onChange={setLeftId} excludeId={rightId} />
            <Selector label="Right" value={rightId} onChange={setRightId} excludeId={leftId} />
          </div>
        </div>

        <div className="bg-black border border-white/10 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 mb-4 border-b border-gray-800">
            <div></div>
            <div>
              <h2 className="text-2xl font-semibold text-white">{leftStack?.name || '-'}</h2>
              <p className="text-gray-400 mt-1">{leftStack?.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">{rightStack?.name || '-'}</h2>
              <p className="text-gray-400 mt-1">{rightStack?.description}</p>
            </div>
          </div>

          <InfoRow
            label="Difficulty"
            left={leftStack?.difficulty}
            right={rightStack?.difficulty}
          />
          <InfoRow
            label="Type"
            left={leftStack?.type}
            right={rightStack?.type}
          />
          <InfoRow
            label="Estimated Time"
            left={
              <div className="inline-flex items-center gap-2 text-gray-300"><Clock className="h-4 w-4" />{leftStack?.estimatedTime}</div>
            }
            right={
              <div className="inline-flex items-center gap-2 text-gray-300"><Clock className="h-4 w-4" />{rightStack?.estimatedTime}</div>
            }
          />
          <InfoRow
            label="Popularity"
            left={
              <div className="inline-flex items-center gap-2 text-gray-300"><Users className="h-4 w-4" />{leftStack?.popularity}</div>
            }
            right={
              <div className="inline-flex items-center gap-2 text-gray-300"><Users className="h-4 w-4" />{rightStack?.popularity}</div>
            }
          />
          <InfoRow
            label="Rating"
            left={
              <div className="inline-flex items-center gap-2 text-gray-300"><Star className="h-4 w-4 fill-white text-white" />{leftStack?.rating}/5</div>
            }
            right={
              <div className="inline-flex items-center gap-2 text-gray-300"><Star className="h-4 w-4 fill-white text-white" />{rightStack?.rating}/5</div>
            }
          />
          <InfoRow
            label="Technologies"
            left={renderTags(leftStack?.technologies)}
            right={renderTags(rightStack?.technologies)}
          />
          <InfoRow
            label="Top Pros"
            left={
              <ul className="text-gray-300 space-y-1">
                {(leftStack?.pros || []).slice(0, 3).map((p, i) => (
                  <li key={`l-pro-${i}`} className="flex gap-2 items-start"><CheckCircle className="h-4 w-4 text-white mt-0.5" /><span>{p}</span></li>
                ))}
              </ul>
            }
            right={
              <ul className="text-gray-300 space-y-1">
                {(rightStack?.pros || []).slice(0, 3).map((p, i) => (
                  <li key={`r-pro-${i}`} className="flex gap-2 items-start"><CheckCircle className="h-4 w-4 text-white mt-0.5" /><span>{p}</span></li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
