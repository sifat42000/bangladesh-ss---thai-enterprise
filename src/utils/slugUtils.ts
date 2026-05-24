/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const normalizeSlug = (value: string | undefined): string =>
  decodeURIComponent(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
