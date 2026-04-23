
Yes — we can turn the selected “Exterior Remodeling” service image into an interactive before/after slider while keeping the rest of the service card the same.

## Plan

1. Add before/after image support to the Services data
   - Keep the existing service card layout, title, description, spacing, and aspect ratio.
   - Update only the selected “Exterior Remodeling” service item so it can use two images instead of one.
   - Use the uploaded “before” and “after” images once you send them.

2. Build a reusable before/after image comparison component
   - Display the “before” image as the base layer.
   - Display the “after” image clipped on top.
   - Add a draggable slider handle so visitors can reveal more or less of the after image.
   - Include small “Before” and “After” labels on the image.
   - Preserve the current `4:3` card image area so the services grid does not shift.

3. Keep the current service card behavior
   - Maintain the same card hover styling.
   - Keep lazy-loaded images where appropriate.
   - Keep the same object-cover behavior so images fill the card neatly.
   - Ensure the rest of the service cards still render as normal single images.

4. Make it mobile-friendly
   - The slider will work with mouse, touch, and keyboard-friendly input behavior.
   - The handle will be large enough to use on phones.
   - The comparison will stay inside the existing rounded image container.

## What I’ll need from you

Please upload the two images:
- Before image
- After image

Once they’re uploaded, I’ll wire them into the selected Exterior Remodeling service card and keep everything else unchanged.

## Technical details

- Update `src/components/site/Services.tsx`.
- Add a small `BeforeAfterSlider` component, either inside `Services.tsx` or as a separate component if cleaner.
- Use React state for the slider position.
- Use CSS clipping or width-based overlay to reveal the after image.
- Use the existing `@radix-ui/react-slider` dependency already present in the project, or implement a lightweight native range input if that is simpler and more reliable for this use case.
